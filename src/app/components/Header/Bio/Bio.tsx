import Image from 'next/image';

export default function Bio() {
  return (
    <div>
      <Image src='/logo.png' alt='NeuralClocks Logo' width={100} height={100} />
      <h1 className='text-4xl pt-1 font-bold tracking-tight text-pink-700 max-w-s'>
        NeuralClocks
      </h1>
      <h2 className='pt-1 font-semibold text-xl tracking-tight text-slate-200'>
        Team based Pomodoro Collaboration
      </h2>
    </div>
  );
}
