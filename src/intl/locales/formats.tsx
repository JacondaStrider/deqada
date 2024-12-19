export const formats = {
  br: () => <br />,
  currentYear: () => new Date().getFullYear(),
  span: (text: React.ReactNode) => <span>{text}</span>,
  strong: (text: React.ReactNode) => <strong>{text}</strong>,
};
