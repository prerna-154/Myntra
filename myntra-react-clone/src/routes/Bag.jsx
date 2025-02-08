import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { Link } from "react-router-dom";
const Bag = () => {

  const bagItems = useSelector(state => state.bag)
  const items = useSelector(state => state.items)

  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex>= 0 ;
  })

  return (
    <main>
      <div className="bag-page">
        {finalItems.length > 0 ? (
          <>
            <div className="bag-items-container">
              {finalItems.map((item) => (
                <BagItem key={item.id} item={item} />
              ))}
            </div>
            <BagSummary />
          </>
        ) : (
          
          <div className="empty-bag">
            <h2>Your bag is empty 😔</h2>
            <p>Looks like you haven't added anything to your bag yet.</p>
            <Link to="/" className="start-shopping-btn">Start Shopping</Link>
          </div>
          
        )}
      </div>
    </main>
  );
}
export default Bag ;