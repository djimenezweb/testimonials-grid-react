import {
	StyledAvatar,
	StyledCard,
	StyledCardInfo,
	StyledName,
	StyledPersonInfo,
	StyledPosition,
	StyledTestimonialText,
	StyledTestimonialTitle
} from './styles';

const Card = ({
	bgColor,
	textColor,
	borderColor,
	iconSrc,
	name,
	position,
	testimonialTitle,
	testimonial
}) => {
	return (
		<StyledCard bgColor={bgColor} textColor={textColor}>
			<StyledCardInfo>
				<StyledAvatar borderColor={borderColor} src={iconSrc} />
				<StyledPersonInfo>
					<StyledName>{name}</StyledName>
					<StyledPosition>{position}</StyledPosition>
				</StyledPersonInfo>
			</StyledCardInfo>
			<StyledTestimonialTitle>{testimonialTitle}</StyledTestimonialTitle>
			<StyledTestimonialText>{testimonial}</StyledTestimonialText>
		</StyledCard>
	);
};

export default Card;
