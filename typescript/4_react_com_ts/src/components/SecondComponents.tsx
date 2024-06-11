type Props = {
    name: string;
};

const SecondComponents = (props: Props) => {
    return (
        <div>
            <p>Meu Segundo componente</p>
            <p>O nome dele é {props.name}</p>
        </div>
    );
};

export default SecondComponents;
