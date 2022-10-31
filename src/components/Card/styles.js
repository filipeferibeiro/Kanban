import styled, { css } from "styled-components";

export const Container = styled.div`
	position: relative;
	background: #393e46;
	border-radius: 10px;
	margin-bottom: 10px;
	padding: 15px;
	border-top: 20px solid rgba(255, 255, 255, 0.1);
	cursor: grab;

	header {
		position: absolute;
		top: -22px;
		left: 15px;
	}

	p {
		font-weight: 500;
		line-height: 20px;
	}

	img {
		width: 24px;
		height: 24px;
		border-radius: 20px;
		margin-top: 5px;
	}

	${(props) =>
		props.isDragging &&
		css`
			border: 2px dashed rgba(0, 0, 0, 0.2);
			padding-top: 31px;
			border-radius: 0;
			background: transparent;
			box-shadow: none;
			cursor: grabbing;

			p,
			img,
			header {
				opacity: 0;
			}
		`}
`;

export const Label = styled.span`
	width: 10px;
	height: 10px;
	border-radius: 2px;
	display: inline-block;
	background: ${(props) => props.color};
`;
