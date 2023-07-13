import React from "react";

export default function IntroductionText() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="mb-4 text-4xl font-bold">Hello there,</h1>
        <div className="flex flex-col gap-4 ">
          <h3 className="text-base">
            I&apos;m a full-stack developer with a knack for bringing design and functionality together like a symphony. I&apos;m currently fine-tuning my skills at <span className="text-blue-500">Kooest</span>, loving every minute of creating digital masterpieces.
          </h3>
          <h3 className="text-base">
            In the past, I&apos;ve turned ideas into reality for <span className="text-blue-500">Holy Angel University</span> and even managed a couple of government sites. The results? Projects that not only look great but work seamlessly too!
          </h3>
          <h3 className="text-base">
            When I&apos;m not knee-deep in code, you&apos;ll find me jamming to music or having enlightening chats. It&apos;s in these moments where I find inspiration that trickles into my designs.
          </h3>
          <h3 className="text-base italic">
            Excited to create and innovate with you!
          </h3>
        </div>
      </div>
    </>
  )
}
