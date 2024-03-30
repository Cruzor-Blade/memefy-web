"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const router = useRouter()
  const {uid} = useParams();

  useEffect(() => {
    if (typeof uid === 'string') {
      router.push('memefy://u/' + uid)
    }
  }, []);
  return (
    <main className="flex min-h-screen text-gray-900 dark:text-gray-300 flex-col items-center py-16 px-4 lg:py-24 lg:px-16">
      <div className="mb-6  items-center lg:items-start px-4">
        <img src={'/memefy_letters.png'} alt="Memefy letters icon" className="w-96 h-32 object-contain" />
      </div>
      <div className="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-400">
        You will be redirected to Memefy app shortly.
      </div>
      {
        typeof uid === 'string' ?
          <div>
            If it takes too long to happen, click
            {' '}<a href={'memefy://u/' + uid} className="font-medium text-blue-500 underline underline-offset-2">here</a>
          </div>
          :
          null
      }

      <div className="mt-16 flex flex-col flex-1 items-center gap-y-3">
        <p>
          And if you don't already have the app installed,
        </p>
        <a
          className="flex pl-5 pr-6 pt-2.5 pb-2 font-medium gap-x-3 rounded-md bg-gray-950 dark:bg-gray-700 text-white items-center justify-center w-max" 
          href="https://play.google.com/store/apps/details?id=com.memefy"
          >
          <img src="/google-play.png" alt="Google Play Icon" className="h-8 w-8" />
          Click here to download the Memefy
        </a>
      </div>
    </main>
  );
}
