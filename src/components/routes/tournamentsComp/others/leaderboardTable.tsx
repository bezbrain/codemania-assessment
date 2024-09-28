import { FaAngleDown, FaAngleUp, FaMinus } from "react-icons/fa";

const LeaderboardTable = () => {
  return (
    <div>
      <table className="bg-[#1c1c1c] w-full text-white text-[14px]">
        <thead>
          <tr className="bg-[#242424] text-[#7E7F7F]">
            <td className="pl-4 py-3">Placement</td>
            <td>Player</td>
            <td>Games played</td>
            <td>Wins</td>
            <td>Losses</td>
            <td>W/L ratio</td>
            <td>Points</td>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b-[1px] border-[#292929]">
            <td className="flex gap-2 pl-4 py-3">
              <FaAngleUp className="mt-[1px] text-[#8ac730]" />
              <span>1</span>
            </td>
            <td>Adebayo Oyeleye</td>
            <td>20</td>
            <td>20</td>
            <td>0</td>
            <td>100%</td>
            <td>49</td>
          </tr>
          <tr className="border-b-[1px] border-[#292929]">
            <td className="flex gap-2 pl-4 py-3">
              <FaAngleDown className="mt-[1px] text-[#c42d25]" />
              <span>2</span>
            </td>
            <td>iBROMOVIC109</td>
            <td>20</td>
            <td>19</td>
            <td>1</td>
            <td>98%</td>
            <td>47</td>
          </tr>
          <tr className="border-b-[1px] border-[#292929]">
            <td className="flex gap-2 pl-4 py-3">
              <FaMinus className="mt-[1px] text-[#e3a405]" />
              <span>3</span>
            </td>
            <td>Drillz</td>
            <td>20</td>
            <td>17</td>
            <td>3</td>
            <td>92%</td>
            <td>46</td>
          </tr>
          <tr className="border-b-[1px] border-[#292929]">
            <td className="flex gap-2 pl-4 py-3">
              <FaAngleUp className="mt-[1px] text-[#8ac730]" />
              <span>4</span>
            </td>
            <td>Bigbadderwolf</td>
            <td>20</td>
            <td>12</td>
            <td>8</td>
            <td>55%</td>
            <td>39</td>
          </tr>
          <tr className="border-b-[1px] border-[#292929]">
            <td className="flex gap-2 pl-4 py-3">
              <FaAngleUp className="mt-[1px] text-[#8ac730]" />
              <span>5</span>
            </td>
            <td>Pinky</td>
            <td>20</td>
            <td>10</td>
            <td>6</td>
            <td>50%</td>
            <td>34</td>
          </tr>
          <tr className="border-b-[1px] border-[#292929]">
            <td className="flex gap-2 pl-4 py-3">
              <FaAngleDown className="mt-[1px] text-[#c42d25]" />
              <span>6</span>
            </td>
            <td>demolaoflag</td>
            <td>22</td>
            <td>8</td>
            <td>14</td>
            <td>48%</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
