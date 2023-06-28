export default function Cards(props) {
  return (
    <div className="bg-[#252529] px-6 py-7 rounded-lg">
      <div className="bg-[#1e1e20] inline p-3 text-2xl rounded-md">
        {props.emoji}
      </div>
      <h3 className="mt-8 mb-3 text-[#e0e0d8] text-[16px]">{props.head}</h3>
      <p className="text-[#9c9ca3] text-[14px]">{props.content}</p>
    </div>
  );
}
