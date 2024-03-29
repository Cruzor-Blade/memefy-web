import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="px-3 pt-2 pb-1.5 rounded-md bg-gray-950 text-white" href={'memefy://u/1q2w3e4r5t6y7u8i9o'}>
          Open Memefy App
        </Link>
    </main>
  );
}
