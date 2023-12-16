import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="w-full space-y-8 py-6">
      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Docs
        </div>
        <ChevronRight size={16} />
        <div className="font-medium text-foreground">Button</div>
      </div>

      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Button
        </h1>
        <p className="text-lg text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading mt-12 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          What is Lorem Ipsum?
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </main>
  )
}
