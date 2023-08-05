import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <div className="flex max-w-auto flex-col items-start gap-2">
        <p className="max-w text-lg text-muted-foreground">Home Page</p>
      </div>
    </main>
  );
}
