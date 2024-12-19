import IntlProvider from "./intl-provider";
import UiProvider from "./ui-provider";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <IntlProvider>
      <UiProvider>{children}</UiProvider>
    </IntlProvider>
  );
}
