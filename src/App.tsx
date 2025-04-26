import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

import { CardWithVariants } from "./components/CardWithVariants"

function App() {
  return (
    <section className="flex flex-col  w-6/12 m-auto">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-row-reverse" >
          <ModeToggle />
        </div>

        <CardWithVariants size="full">
          Hi
        </CardWithVariants>
        <CardWithVariants size="wide" variant="red">
          Hi
        </CardWithVariants>
        <CardWithVariants size="mid" variant="blue">
          Hi
        </CardWithVariants>
        <CardWithVariants size="small" variant="green">
          Hi
        </CardWithVariants>
        <CardWithVariants size="tiny" variant="orange">
          Hi
        </CardWithVariants>
      </ThemeProvider>
    </section>
  )
}

export default App