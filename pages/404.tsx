import Link from 'next/link';
import Error404 from '../public/404.jpg';
import Image from 'next/image';

const Custom404 = () => {
    return (
        <div className={"container"}>
            <h1 className={"title"}>404 - Page Not Found</h1>
            <p className={"description"}>
                Oops! The page you are looking for might be in another castle...
            </p>

            <Image
                src={Error404}
                alt="Mario 404"
                className={"image"}
            />

            <Link legacyBehavior href="/">
                <a className={"link"}>Go back home</a>
            </Link>
        </div>
    );
};

export default Custom404;