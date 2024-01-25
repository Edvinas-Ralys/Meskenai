import Link from "./Link";
export default function Nav() {

    return (
        <nav className="navbar">
            <a className="navbar-brand" href="#home">Home Base</a>
            <div className="navbar-nav">
                <Link href={`#animals`} children={`Animals`} />
                <Link href={"#about"} children={`About zoo`} />
                <Link href={"#contact"} children={`Contacts`} />

            </div>
        </nav>
    );
}