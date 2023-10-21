import TopHeroMsg from "./top-hero-msg";
import BillList from './bill-list';


export default function ContentContainer(){
    return(
        <div className="content-container h-fit">
            <TopHeroMsg/>
            <BillList/>
        </div>
    )
}