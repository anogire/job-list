import { DescriptionProps } from "./types";

// "2012-05-04T01:38:26.141Z" => "Posted ... ago" or "Posted today"
export const getFormattedDate = (date: Date): string => {

  const currentDate = new Date();
  const checkDate = new Date(date);

  const calcTime = new Date(currentDate.getTime() - checkDate.getTime());
  const calcFormatTmp = `${calcTime.getDate()}-${calcTime.getMonth() + 1}-${calcTime.getFullYear()}`;
  const calcFormat = calcFormatTmp.split("-");

  const passedDays = +calcFormat[0] - 1;
  const passedMonths = +calcFormat[1] - 1;
  const passedYears = +calcFormat[2] - 1970;

  const formattedDays = (passedDays >= 1 &&
    `${passedDays} ${passedDays === 1 ? 'day' : 'days'}`) ||
    '';
  const formattedMonths = (passedMonths >= 1 &&
    `${passedMonths} ${passedMonths === 1 ? 'month' : 'months'}`) ||
    '';
  const formattedYears = (passedYears >= 1 &&
    `${passedYears} ${passedYears === 1 ? 'year' : 'years'}`) ||
    '';

  const formattedDate = (formattedDays || formattedMonths || formattedYears) ?
    `Posted ${formattedYears} ${formattedMonths} ${formattedDays} ago` :
    'Posted today';

  return formattedDate;
}

//69k-75k => [69 000, 75 000]
export const getSalary = (salaryStr: string): string[] => {
  const regexp = /\d+(\.\d+)?/g;
  const formattedSalary = salaryStr.replace(/k/g, '000');

  const searchResult = formattedSalary.match(regexp) || ['0', '0'];
  const salary = searchResult.map(el => new Intl.NumberFormat("ru").format(+el));

  return salary;
}

//text => {'description', [responsibilities], [benefits]}
export const getDescriptionJob = (description: string): DescriptionProps => {
  const result: DescriptionProps = {
    description: "",
    responsibilities: [],
    benefits: [],
  };

  let addDescription = description;
  const regexpRespons = /Responsopilities:/i;
  let isRespons = false;
  const regexpBenefits = /Compensation & Benefits:/i;

  let curFormat = regexpRespons.test(addDescription) ? addDescription.split(regexpRespons) : [addDescription];
  if (curFormat.length > 1) {
    isRespons = true;
    result.description = curFormat[0].trim();
    addDescription = curFormat[1];
  }

  curFormat = regexpBenefits.test(addDescription) ? addDescription.split(regexpBenefits) : [addDescription];
  if (curFormat.length > 1) {
    if (!result.description) {
      result.description = curFormat[0].trim();
    }

    result.benefits = curFormat[1].split('.') || [];
    result.benefits = [...result.benefits.map(el => el.trim()).filter(el => el).map(el => el.concat('.'))];
  }

  if (isRespons) {
    result.responsibilities = curFormat[0].split('.') || [];
    result.responsibilities = [...result.responsibilities.map(el => el.trim()).filter(el => el).map(el => el.concat('.'))];
  }

  if (!result.description) {
    result.description = addDescription.trim();
  }

  return result;
}

//Pages for pagination < | 1 ... 5 6 7 8 9 ... 15 | > 
export const getPaginationPages = (currentPage: number, totalPages: number, visibleQuantity: number): string[] => {
  const pages: string[] = [];
  let i = 1;

  // < | 1 2 3 4 5 | >
  if (totalPages <= visibleQuantity) {
    while (i <= totalPages) {
      pages.push(String(i++));
    }
  } else
    // < | 1 2 3 4 5 ... 15 | >
    if (currentPage <= visibleQuantity) {
      while (i <= totalPages && i <= visibleQuantity) {
        pages.push(String(i++));
      }
      pages.push('...', String(totalPages));
    } else
      // < | 1 ... 11 12 13 14 15 | >
      if (currentPage > totalPages - visibleQuantity) {
        pages.push('1', '...');
        i = totalPages - visibleQuantity + 1;
        while (i <= totalPages) {
          pages.push(String(i++));
        }
      } else {
        //< | 1 ... 5 6 7 8 9 ... 15 | >
        pages.push('1', '...');
        i = currentPage - Math.floor(visibleQuantity / 2);
        while (i <= currentPage + Math.floor(visibleQuantity / 2)) {
          pages.push(String(i++));
        }
        pages.push('...', String(totalPages));
      }

  return pages;
}