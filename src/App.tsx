import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

import { ChartSample } from "./components/chartSample"
import { CardWithVariants } from "./components/CardWithVariants"
import { SectionCard } from "./components/util/SectionCard"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { Input } from "./components/ui/input"

function App() {
  return (
    <section className="flex flex-col  w-6/12 m-auto">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-row-reverse" >
          <ModeToggle />
        </div>

        <SectionCard
          title="Some Card Title"
          description="Some Card Description"
          footerText="Some Footer text">
          <h2>Some Cool Stuff will be here</h2>
          <Button>This is a button</Button>
          <br /><br />
          <Button size="sm">This is a small button</Button>
          <br /><br />
          <Separator />
          <br />
          <Input placeholder="Some Cool PlaceholderText" />
        </SectionCard>

        <ChartSample />


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