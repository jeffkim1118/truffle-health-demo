import Calendar from "./calendar";
import InsuranceAcc from "./insuranceAcc";
import Saving from "./savings";

export default function Side() {
  return (
    <div>
        <Saving/>
        <InsuranceAcc/>
        <Calendar/>
    </div>
  );
}
