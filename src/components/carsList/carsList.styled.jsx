import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 100px;
`;

export const CarsListEl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  margin: 0px auto;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 274px;
  height: 426px;

  border: ${(props) => props.theme.borders.normal};
  border-radius: ${(props) => props.theme.radius.normal};

  img {
    display: block;
    height: 268px;
    width: 100%;
    border-radius: ${(props) => props.theme.radius.normal};

    object-fit: cover;
    object-position: center;
  }

  p {
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
    line-height: 1.5;
  }
`;
