import Select from 'react-select';
import '../styles/AssetView.css';

const AssetView = () => {

    const handleCopyBtnClick = e => {
        console.log("copy button clicked");
    }

    return (
        <div>
            <div>
                <Select className="asset-form-select" />
                <button onClick={handleCopyBtnClick} className="asset-btn-copy"><i className="neu-copy"></i></button>
            </div>
        </div>
    )
}

export default AssetView;