
import Cover from '../shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../hooks/useMenu';
import SectionHeader from '../SectionHeader';
import Categories from '../Categories';


const Menu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Cover coverImg ={menuImg} title="Out Menu"></Cover>

            <SectionHeader header="ToDays Offer" subHeader="Don't Miss"></SectionHeader>
            <Categories items={popular}></Categories>
            <Categories items={desserts} title="Desesert" coverImg={dessertImg}></Categories>
            
        </div>
    );
};

export default Menu;