export type JobInfo = {
  address: string,
  benefits: string[],
  createdAt: Date,
  description: string,
  email: string,
  employment_type: string[],
  id: string,
  location: { lat: number, long: number }
  name: string
  phone: string,
  pictures: string[],
  salary: string,
  title: string,
  updatedAt: Date,
};

export type DescriptionProps = {
  description: string,
  responsibilities: string[],
  benefits: string[],
}