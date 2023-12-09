import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./container.css";

function Container() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/collections"
        );
        if (response.status === 200) {
          const collectionsWithPlaceholders = response.data.map(
            (collection) => {
              if (!collection.photo) {
                return {
                  ...collection,
                  photo: "https://placekitten.com/200/200",
                };
              }
              return collection;
            }
          );
          setCollections(collectionsWithPlaceholders);
        } else {
          console.error("Failed to fetch collections");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h2>Evil Plans Projects</h2>
        <div className="buttons">
          <button>
            <FontAwesomeIcon icon={faFlipboard} /> &nbsp; Boards
          </button>
          <button>
            <FontAwesomeIcon icon={faBinoculars} />
            &nbsp; Views
          </button>
          <button>
            <FontAwesomeIcon icon={faPerson} /> &nbsp; Members
          </button>
        </div>
      </div>
      <div className="collections">
        <h3>Collections:</h3>
        <ul>
          {collections.map((collection) => (
            <li key={collection._id}>
              <img src={collection.photo} alt={`${collection.name}`} />
              <p>{collection.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Container;
