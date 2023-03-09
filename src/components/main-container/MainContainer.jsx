import { StyledMainContainer } from './styles';
import { testimonials } from '../../constants/testimonials';
import Card from '../card/Card';

const MainContainer = () => {
	return (
		<StyledMainContainer>
			{testimonials.map(object => {
				return <Card key={object.id} {...object} />;
			})}
		</StyledMainContainer>
	);
};

export default MainContainer;
