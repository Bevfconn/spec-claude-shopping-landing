import { useState, useRef, useEffect } from 'react';
import { Box, IconButton, InputBase, Fade } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setSearchValue('');
    }
  };

  const handleBlur = () => {
    if (!searchValue) {
      setIsExpanded(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchValue)}`;
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Fade in={isExpanded}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: isExpanded ? 'flex' : 'none',
            alignItems: 'center',
            bgcolor: 'grey.100',
            borderRadius: 1,
            px: 1,
            mr: 1,
          }}
        >
          <InputBase
            inputRef={inputRef}
            placeholder="Search products..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onBlur={handleBlur}
            sx={{
              width: { xs: 120, sm: 200 },
              fontSize: '0.875rem',
            }}
            inputProps={{
              'aria-label': 'Search products',
            }}
          />
        </Box>
      </Fade>
      <IconButton
        onClick={handleToggle}
        aria-label={isExpanded ? 'Close search' : 'Open search'}
        sx={{ color: 'inherit' }}
      >
        {isExpanded ? <CloseIcon /> : <SearchIcon />}
      </IconButton>
    </Box>
  );
}
