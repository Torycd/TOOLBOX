import { TextProvider } from "./Testting/TextProvider";

export default function App() {
  return (
    <TextProvider>
      <div
        style={{
          maxWidth: "500px",
          margin: "2rem auto",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Tool Manager</h1>

        {/* Add Tool */}
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Tool name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        {/* Tool List */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tools.map((tool) => (
            <li
              key={tool.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
                border: "1px solid #ccc",
                padding: "0.5rem",
                borderRadius: "5px",
              }}
            >
              <span>
                {tool.name} ({tool.quantity})
              </span>

              <div>
                <button onClick={() => handleReduce(tool.id)}>-</button>
                <button onClick={() => handleDelete(tool.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </TextProvider>
  );
}
