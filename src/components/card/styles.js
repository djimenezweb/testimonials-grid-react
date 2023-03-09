import styled from 'styled-components';

const StyledCard = styled.article`
	background-color: ${({ bgColor }) => bgColor};
	color: ${({ textColor }) => textColor};
	padding: 2rem;
	border-radius: 0.5rem;
	box-shadow: 40px 60px 50px -50px hsla(217 19% 35% / 0.25);
`;
const StyledCardInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 18px;
`;
const StyledAvatar = styled.img`
	width: 28px;
	height: 28px;
	border-radius: 50%;
	border: 2px solid ${({ borderColor }) => borderColor};
`;
const StyledPersonInfo = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledName = styled.h2`
	margin: 0;
	font-size: 13px;
	font-weight: 500;
`;
const StyledPosition = styled.p`
	margin: 0;
	font-size: 11px;
	font-weight: 500;
	opacity: 0.5;
`;
const StyledTestimonialTitle = styled.p`
	margin: 0 0 1rem;
	font-size: 20px;
	font-weight: 600;
`;
const StyledTestimonialText = styled.p`
	margin: 0;
	font-size: 13px;
	font-weight: 500;
	line-height: 18px;
	opacity: 0.7;
`;

export {
	StyledCard,
	StyledCardInfo,
	StyledAvatar,
	StyledPersonInfo,
	StyledName,
	StyledPosition,
	StyledTestimonialTitle,
	StyledTestimonialText
};
