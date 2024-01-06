import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

// eslint-disable-next-line react/prop-types
const LinkResult = ({ inputValue }) => {
  // console.log(inputValue);
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
        setError(err);
    } finally {
        setLoading(false);
    }
}

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        if (inputValue.length) {
          fetchData();
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [inputValue]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000); 
      return () => clearTimeout(timer);
    }, [copied]);
    if(loading) {
        return <p className="nodata">Loading....</p>
    }
    if(error) {
        return <p className="nodata text-danger">Something went wrong check server connection :( </p>
    }
    // console.log(shortenLink);


    return (
      <>
      {shortenLink && (
         <div className="text-dark bg-danger  h3">
         <p className="border-danger">{shortenLink}</p>
         <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
           <button className={copied ? "copied" : ""}>copy to clipboard</button>
         </CopyToClipboard>
         </div>

      )}
      </>
    ); 
  };

export default LinkResult;
