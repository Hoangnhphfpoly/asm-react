import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mail from "../../image/mail.png";

const Detail_post = () => {
  let id = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    let API_URL = `http://localhost:1337/posts/${id.id}`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, [id.id]);

  return (
    <div className="bg-no-repeat bg-best-game ">
      <div className="bg-gray-900 bg-opacity-75">
        <div className="container mx-auto pt-32 py-64 ">
          <div className="grid grid-cols-3 bg-gray-900 rounded p-8 gap-6">
            <div className="col-span-2 text-white">
              <div className="flex justify-between items-center pb-8">
                <button
                  disabled
                  className="bg-purple-800 bg-opacity-25 px-6 rounded-md py-1 font-mono
                            border-gray-400 border-2 text-white font-thin text-xs"
                >
                  {post.id}
                </button>
                <div className="text-sm text-purple-700 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="20"
                    height="20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <p className="text-white text-xs">11.02.2020, 4:19</p>
                  </span>
                </div>
              </div>
              <h1 className="text-4xl pb-4">{post.title}</h1>
              <img src={post.img} alt="" />
              <p className="text-lg pt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p className="text-lg pt-4">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <h2 className="text-3xl py-2">Keep Reading(H2)</h2>
              <p className="text-lg pt-4">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <h3 className="text-2xl py-2">Some title(H3)</h3>
              <p className="text-lg pt-4">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
              <p className="text-lg pt-4">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
            </div>
            <div className="col-span-1 grid-rows-1 justify-items-center">
              <div className="text-purple-600 border-gray-800 border-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="100"
                  height="100"
                  className="mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
                <div className="text-center text-white p-4">
                  <p className="text-xl pb-4">Subscribe to news</p>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary.
                  </p>
                  <div className="py-2">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Email"
                      className="w-full bg-gray-900 border rounded border-gray-800 mt-2"
                    />
                  </div>
                  <button className="bg-green-500 px-8 rounded-md py-2 text-base font-bold font-mono hover:bg-purple-500 transition duration-500 ease-in-out mt-2 w-auto">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_post;
