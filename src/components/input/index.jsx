import React from "react";

const Valss = () => {
  return (
    <form className="flex flex-col gap-2.5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <label>Origin Country</label>
          <input type="text" placeholder="Origin Country" className="border p-2" />
        </div>
        <div className="flex flex-col">
          <label>Destination Country</label>
          <input type="text" placeholder="Destination Country" className="border p-2" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <label>Origin Port</label>
          <input type="text" placeholder="Origin Port" className="border p-2" />
        </div>
        <div className="flex flex-col">
          <label>Destination Port</label>
          <input type="text" placeholder="Destination Port" className="border p-2" />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label>Types of Goods</label>
        <select className="border p-2">
          <option value="liquid">Liquid Goods</option>
          <option value="solid">Solid Goods</option>
          <option value="bulk">Bulk Goods</option>
          <option value="electronic">Electronic Goods</option>
          <option value="transportation">Transportation Good</option>
          <option value="mega-bulk">Mega Bulk Goods</option>
          <option value="refrigerated">Refrigerated Goods</option>
          <option value="hazardous">Hazardous Goods</option>
          <option value="livestock">Livestock Goods</option>
        </select>
      </div>

      <div className="flex flex-col w-full">
        <label>Volume</label>
        <input type="text" placeholder="Volume" className="border p-2" />
      </div>

      <div className="flex flex-col w-full">
        <label>Route Type</label>
        <div className="flex gap-2.5">
          <label>
            <input type="checkbox" value="shortest" /> Shortest
          </label>
          <label>
            <input type="checkbox" value="fastest" /> Fastest
          </label>
          <label>
            <input type="checkbox" value="economic" /> Economic
          </label>
          <label>
            <input type="checkbox" value="safest" /> Safest
          </label>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label>Departure Date</label>
        <input type="text" placeholder="Departure Date" className="border p-2" />
      </div>
    </form>
  );
};

export default Valss;
