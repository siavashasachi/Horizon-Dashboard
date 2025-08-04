function SearchInput(){
    return(
        <div class="relative search-input-box">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center  z-20 ps-3.5">
            <svg class="shrink-0 size-4 text-primary " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input class=" py-2 ps-10 pe-4 block   bg-body rounded-3xl text-secondary" type="text"  placeholder="search" value="" />
        </div>


      </div>
    )
}
export default SearchInput