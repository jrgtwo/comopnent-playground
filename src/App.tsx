import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { AppAccordion } from "@/components/util/AppAccordion"
import { AppDialog } from "@/components/util/AppDialog"
import { SectionCard } from "./components/util/SectionCard"

function App() {
  return (
    <section className="flex flex-col  w-6/12 m-auto">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex flex-row-reverse" >
          <ModeToggle />
        </div>

        <SectionCard
          title="My Cool Section"
          description="This is how a section looks">
          <AppAccordion />
        </SectionCard>

        <SectionCard
          title="Another Great Section">
          <p>Click the button below to open the dialog box</p>
          <AppDialog
            onClick={() => { debugger }}
            buttonText="Click Me"
            dialogTitle="This is a great dialog box">
            <AppAccordion />
          </AppDialog>
        </SectionCard>
      </ThemeProvider>
    </section>
  )
}

export default App