import './DataItem.scss';

export default function DataItem({key, value}) {
  return (
    <option key={key} value={value}></option>
  )
}
