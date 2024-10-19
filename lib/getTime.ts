export default function getFormattedDate() {
  const options: any = { weekday: "long", month: "long", day: "numeric" };
  const currentDate = new Date();

  return currentDate.toLocaleDateString("en-US", options);
}
