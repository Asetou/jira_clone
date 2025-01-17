import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className= "flex gap-4">
      <input/>
      <Button size="lg">
        Primary
      </Button>
      
      <Button variant="secondary">
        Secondary
      </Button>
      
      <Button variant="destructive">
        Desstructive
      </Button>
      
      <Button variant="ghost">
        ghost
      </Button>
      <Button variant="muted">
        muted
      </Button>
      <Button variant="teritrary">
        teritrary
      </Button>

    </div>
  );
}
