import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Eth, Span, Div, TextWrapper, Container } from './styles';

const NFTCard = () => {
    return (
        <Container>
            <Card>
                <Image
                    src="https://res.cloudinary.com/benidevo/image/upload/v1639583405/image-equilibrium_jxk8xt.jpg"
                    wrapped
                    ui={false}
                />
                <Card.Content>
                    <Card.Header>
                        <Span>Equilibrium #3429</Span>
                    </Card.Header>
                    <Card.Meta>
                        Our Equilibrium collection promotes balance and calm.
                    </Card.Meta>
                    <Div>
                        <Eth>
                            <Icon name="ethereum" />
                            <p>0.041 ETH</p>
                        </Eth>
                        <TextWrapper>
                            <Icon name="clock" />
                            <p>3 days left</p>
                        </TextWrapper>
                    </Div>
                </Card.Content>

                <Card.Content extra>
                    <TextWrapper>
                        <Image
                            src="https://res.cloudinary.com/benidevo/image/upload/v1639583405/image-avatar_fhpjsl.png"
                            size="medium"
                            avatar
                            bordered={true}
                        />
                        <p>
                            Creation of <Span>Jules Wyvern</Span>
                        </p>
                    </TextWrapper>
                </Card.Content>
            </Card>
        </Container>
    );
};

export default NFTCard;
