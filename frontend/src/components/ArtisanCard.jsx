export default function ArtisanCard({ name, job, photo, note }) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 border-0 shadow-sm">
                <img src={photo} alt={name} className="card-img-top" />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted mb-1">{job}</p>
                    <div className="text-warning">
                        {"★".repeat(note)}{"☆".repeat(5 - note)}
                    </div>
                </div>
            </div>
        </div>
    );
}