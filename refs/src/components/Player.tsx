export default function Player() {
  return (
    <section className="text-center">
      <h2 className="text-[#54a399]">Welcome unknown entity</h2>
      <p className="flex justify-center items-center">
        <input
          className="border border-solid border-[#54a399] bg-[#192f2b] rounded rounded-tr-none rounded-br-none p-1 text-[#d1f0ec]"
          type="text"
        />
        <button className="cursor-pointer bg-[#54a399] border border-solid border-[#54a399] py-[0.4rem] px-4 text-[#061e1a] rounded-tr rounded-br hover:bg-[#3c8379] hover:border-[#3c8379]">
          Set Name
        </button>
      </p>
    </section>
  );
}
