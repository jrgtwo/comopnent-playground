import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PropsWithChildren } from "react"

interface SectionCardProps extends PropsWithChildren {
  title?: string;
  description?: string;
  footerText?: string;
}
const SectionCard = ({ title, description, footerText, children }: SectionCardProps) => {

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        {footerText && <p>{footerText}</p>}
      </CardFooter>
    </Card>
  )
}

export { SectionCard }