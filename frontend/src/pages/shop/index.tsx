import React, { useEffect, useState } from "react";
import { Product, ProductType } from "../../components/Product";
import { Group } from "../../components/Group/Group";
import {
  Checkbox,
  FormControlLabel,
  Slider,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  Breadcrumbs,
  Link,
  Radio,
  RadioGroup,
  Pagination,
} from "@mui/material";
import FilterIcon from "@mui/icons-material/TuneSharp";
import { CustomSlider } from "../../components/CustomSlider/CustomSlider";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getProducts, getProductsByCategory } from "@/pages/api/product";
import { getCategories } from "../api/category";
import { useI18n } from "../../hooks/useI18n";
import { CategoryType } from "@/components/Catalog";
import { formatCash, formatCurrency } from "@/ultils";
import { start } from "repl";

const MAX = 1000000;
const MIN = 0;
const PRODUCT_PER_PAGE = 8

export const getServerSideProps = (async (context) => {
  const relatedProducts = await getProducts();

  return { props: { relatedProducts } };
}) satisfies GetServerSideProps<{}>;

type FilterType = {
    categories: string[],
    price: number[],
    sort: string,
}

type PageInfoType = {
  startIndex: number,
  endIndex: number
}

function Shop({
  relatedProducts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState<ProductType[]>(relatedProducts);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  const init: FilterType = {
    categories: [],
    price: [MIN, MAX],
    sort: 'random',
  }

  const [filterTag, setFilterTag] = useState<FilterType>(init);

  const { t } = useI18n();

  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data.slice(1)))
      .then(() => setLoading(false));
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/shop">
      Shop
    </Link>,
    <span className="text-[--primary-color]" key="2">
      Thực phẩm chức năng
    </span>,
  ];

  const handleFilterCategories = (
    e: React.ChangeEvent<HTMLInputElement>,
    tag: string
  ) => {
    if (e.target.checked) {
      setFilterTag({...filterTag, categories: [...filterTag.categories, tag]});
    } else {
      setFilterTag({...filterTag, categories: filterTag.categories.filter((i) => i !== tag)});
    }
  };

  const handleFilterPrice = (e: Event, value: number[]) => {
    setFilterTag({...filterTag, price: value});
  }


  const handleClick = () => {
    backToTop()
    setLoading(true)
    fetch(`/api/product?categories=${filterTag.categories}&price=${filterTag.price}`)
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .then(() => setLoading(false))
  }

  const renderFilter = () => {
    return (
      <Box>
        <Group title={t("Danh mục sản phẩm")} collapsible={false}>
          <div className="flex flex-col w-full gap-2">
            {categories.map((category, index) => (
              <FormControlLabel
                key={index}
                label={<span className="text-sm">{category.name}</span>}
                control={
                  <Checkbox
                    className="p-0 px-2"
                    size="small"
                    disableRipple
                    onChange={(e) =>
                        handleFilterCategories(e,category.productCategoryId)
                    }
                  />
                }
              />
            ))}
          </div>
        </Group>

        <Group title={t("Giá sản phẩm")} collapsible={false}>
          <Box sx={{ width: 250 }}>
            <CustomSlider
              getAriaLabel={() => "Temperature range"}
              value={[filterTag.price[0], filterTag.price[1]]}
              valueLabelDisplay="auto"
              min={MIN}
              max={MAX}
              onChange={(e, value) => handleFilterPrice(e, value as number[])}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" sx={{ cursor: "pointer" }}>
                {formatCash(MIN)}
              </Typography>
              <Typography variant="body2" sx={{ cursor: "pointer" }}>
                {formatCash(MAX)}
              </Typography>
            </Box>
          </Box>
        </Group>

        <Group title={t("Sắp sếp theo")} collapsible={false}>
          <div className="flex flex-col w-full gap-2">
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={(e) => setFilterTag({...filterTag, sort: e.target.value})}
            >
                <FormControlLabel value="increase" control={<Radio size="small"/>} label={<span className="text-sm">{t("Giá tăng dần")}</span>} />
                <FormControlLabel value="reduce" control={<Radio size="small"/>} label={<span className="text-sm">{t("Giá giảm dần")}</span>} />
            </RadioGroup>
          </div>
        </Group>

        <Group title={t("Xuất Xứ Thương Hiệu")} collapsible={false}>
          <div className="flex flex-col w-full gap-2">
            <FormControlLabel
              label={<span className="text-sm">{t("Hoa Kỳ")}</span>}
              control={
                <Checkbox className="p-0 px-2" size="small" disableRipple />
              }
            />
            <FormControlLabel
              label={<span className="text-sm">{t("Pháp")}</span>}
              control={
                <Checkbox className="p-0 px-2" size="small" disableRipple />
              }
            />
            <FormControlLabel
              label={<span className="text-sm">{t("Đức")}</span>}
              control={
                <Checkbox className="p-0 px-2" size="small" disableRipple />
              }
            />
            <FormControlLabel
              label={<span className="text-sm">{t("Việt Nam")}</span>}
              control={
                <Checkbox className="p-0 px-2" size="small" disableRipple />
              }
            />
          </div>
        </Group>

        <Group title={t("Nước Sản Xuất")} collapsible={false}>
          <div className="flex flex-col w-full gap-2">
            <FormControlLabel
              label={<span className="text-sm">{t("Hàn quốc")}</span>}
              control={
                <Checkbox className="p-0 px-2" size="small" disableRipple />
              }
            />
            <FormControlLabel
              label={<span className="text-sm">{t("Pháp")}</span>}
              control={
                <Checkbox className="p-0 px-2" size="small" disableRipple />
              }
            />
            <FormControlLabel
              label={<span className="text-sm">{t("Đức")}</span>}
              control={
                <Checkbox className="p-0 px-2" size="small" disableRipple />
              }
            />
            <FormControlLabel
              label={<span className="text-sm">{t("Nhật Bản")}</span>}
              control={
                <Checkbox className="p-0 px-2" size="small" disableRipple />
              }
            />
          </div>
        </Group>

        <button className="bg-[--primary-color] text-white px-4 py-2 rounded-md" onClick={handleClick}>
          Apply Filters
        </button>
      </Box>
    );
  };

  return (
    <div className="flex w-[94%] mx-auto pt-2 px-3">
      <div className="bg-white w-1/4 flex flex-col gap-10 border-r border-slate-100 mt-16 max-md:hidden">
        {renderFilter()}
      </div>
      <div className="right w-full flex gap-2 flex-col md:mt-16 justify-start items-center">
        <Box sx={{ pl: 4 }} className="md:hidden">
          <IconButton aria-label="delete" onClick={() => setShowFilter(true)}>
            <FilterIcon />
          </IconButton>
        </Box>
        <Box sx={{ pl: 4 }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {loading || products.length < 1 ? (
            <div>Không có sản phẩm</div>
          ) : (
            products.map((product, index) => (
              <div>
                <Product item={product} />
              </div>
            ))
          )}
        </div>
        {/* {
          PRODUCT_PER_PAGE < products.length && 
          <Pagination count={MAX_PAGE} variant="outlined" shape="rounded" page={currentPage} onChange={handleChage} />
        }
         */}
      </div>
      <Drawer open={showFilter} onClose={() => setShowFilter(false)}>
        <Box sx={{ p: 4 }}>{renderFilter()}</Box>
      </Drawer>
    </div>
  );
}

export default Shop;
