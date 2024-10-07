export const Badges = ({ technologies }:{technologies:string[]}) => {
    return (
      <div className="badges flex space-x-2">
        {technologies.map((tech, index) => (
          <div key={index} className="badge p-1 rounded">
            {tech}
          </div>
        ))}
      </div>
    );
  };