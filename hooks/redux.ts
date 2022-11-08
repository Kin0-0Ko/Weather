import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDistpatch, RootState } from '../store/store';


export const useAppDispatch = () => useDispatch<AppDistpatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
