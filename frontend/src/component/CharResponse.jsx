const ChatResponse=({response})=>{
    if(!response ){
        return null;
    }
    const {candidates,usageMetadata}=response;


    return (
        <div className="my-4">
            <h3>Response</h3>
            {candidates.map((candidate,index)=>(
                <div className="card mb-3" key={index}>
                   
                   <div className="card-body p-2">
                   <h5 className="card-title">Candidate{index+1} </h5>
                   <p className="card-text">{candidate.content.parts[0].text}</p>
                   <h6> Citations:</h6>
                   <ul>
                    {candidate?.citationMetadata?.citationSources.map((source, idx)=>(
                        <li>
                            <a href={SourceBuffer.url} target="_blank" rel="noopener noreferrer">
                                {SourceBuffer.url}
                            </a>{" "}
                            (Indexes: {SourceBuffer.startIndex}-{source.endIndex})
                        </li>

                    ))}
                    <h4> Usage meta data</h4>
                    <p>Prompt tokens: {usageMetadata.promptTokenCount}</p>
                    <p> Response tokens: {usageMetadata.promptTokenCount}</p>
                    <p>Total tokens: {usageMetadata.promptTokenCount}</p>
                    
                   </ul>
                   </div>
                </div>
            ))}
        </div>
    )
}
export default ChatResponse;