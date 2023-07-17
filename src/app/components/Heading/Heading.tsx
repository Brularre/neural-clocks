type headingProps = {
  text: string;
};

export default function Heading(props: headingProps) {
  return (
    <h2 className='text-xl font-bold uppercase tracking-widest text-pink-700 py-5'>
      {props.text}
    </h2>
  );
}
