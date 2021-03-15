import React from "react";
import './home.scss';
import Header from '../../components/header/Header';
import Main from '../../components/main/main';
import SideBar from "../../components/sidebar/SideBar";

class Home extends React.Component {
    state = {
        isLoading: true,
        cardList: [],
    }

    async componentDidMount() {
        const response = await fetch('/craig-nepal/jobs');
        const body = await response.json();
        this.setState({cardList: body, isLoading: false});
        console.log(body);
        console.log("Test11");
    }

    render() {
        console.log("test22");
        return (
            <>
                <Header />
                <div className='grid-container'>
                    <SideBar />
                    <Main
                        cardList={this.state.cardList}
                    />

                </div>

            </>
        );
    }
}

export default Home;