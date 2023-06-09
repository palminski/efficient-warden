const Nav = (props) => {
    const {pageSelected, setPageSelected} = props;

    return (
        <nav>
            <button onClick={() => setPageSelected('referrals')}>Referrals</button>
            <button onClick={() => setPageSelected('settings')}>Settings</button>
        </nav>
    );
};

export default Nav;