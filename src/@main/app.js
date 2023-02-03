import MainRoutes from './router'
import Categories from './components/CategorySection/CategorySection';
import NewIn from './components/newInSection/newInSection';

function Main() {
   return( 
   <>
    <MainRoutes />
    <NewIn />
	<Categories />
   </>
  
   );
}

export default Main;