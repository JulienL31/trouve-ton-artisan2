import { Link } from "react-router-dom";

        export default function NotFoundPage() {
            return (
                <div className="text-center py-5">
                    <h1 className="display-1 text-danger">404</h1>
                    <p className="lead mb-4">La page que vous cherchez semble introuvable.</p>
                    <p>Elle a peut-être été déplacée ou supprimée. Retournez à l'accueil pour continuer votre navigation.</p>
                    <Link to="/" className="btn btn-outline-primary mt-3">Retour à l'accueil</Link>
                </div>
            );
        }