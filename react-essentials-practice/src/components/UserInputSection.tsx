import UserInput from "./UserInput";

const UserInputSection = () => {
  return (
    <section
      className="max-w-lg mx-auto p-4 rounded"
      style={{ background: "linear-gradient(180deg, #307e6c, #2b996d)" }}
    >
      <div className="grid grid-cols-2 gap-x-8">
        <UserInput title="INITIAL INVESTMENT" />
        <UserInput title="ANNUAL INVESTMENT" />
        <UserInput title="EXPECTED RETURN" />
        <UserInput title="DURATION" />
      </div>
    </section>
  );
};

export default UserInputSection;
