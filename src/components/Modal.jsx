// src/Modal.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 800px;
    width: 90%;
    color: black;
    overflow-y: auto;
    max-height: 80vh;
`;

const Markdown = styled.div`
    max-height: 400px;
    overflow-y: auto;

    h1, h2, h3, h4 {
        margin-top: 1em;
        margin-bottom: 0.5em;
    }

    p {
        margin: 0.5em 0;
    }

    code {
        background: #f5f5f5;
        padding: 0.2em 0.4em;
        border-radius: 4px;
    }

    pre {
        background: #f5f5f5;
        padding: 1em;
        border-radius: 4px;
        overflow-x: auto;
    }
`;

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;

    return (
        <ModalWrapper>
            <ModalContent>
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className='font-extrabold'>{project.title}</h2>
                <Markdown>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {project.fullDescription}
                    </ReactMarkdown>
                </Markdown>
                <button onClick={onClose} className='bg-red-600 rounded-md btn-md text-2xl text-white'>Close</button>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
