// src/config/apiConfig.ts

const API_CUSTOM_BASE_URL = "https://stagerp.nitmc.loranet.my/api/method";
const API_BASE_URL = "https://stagerp.nitmc.loranet.my/api/resource";
const API_BASE_URL_2 = "https://api.react.net.my/tziDJI761Bh=";

// API Endpoints
export const LOGIN_API_URLS = {
  LOGIN: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.login`,
  LOGOUT: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.logout`,
};

export const HEARTBEAT = {
  HEARTBEAT_REQUEST: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.heartbeat`,
};

export const USER_API_URLS = {
  USER: `${API_BASE_URL}/User?fields=["name","first_name","role","email","mobile_no", "username","gender", "location", "birth_date", "role"]&limit_page_length=none`,
  USER_CUD: `${API_BASE_URL}/User`,
  USER_GROUP: `${API_BASE_URL}/Role`,
  ZONE_AND_ROAD: `${API_CUSTOM_BASE_URL}/Zone`,
  ACCESS_LOG: `${API_BASE_URL}/Access Log`,
};

export const ZONE_ROAD_API_URLS = {
  ZONE_ROAD: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_zones_with_roads`,
  ZONE_CUD_OPERATION: `${API_BASE_URL}/Zone`,
  ROAD_CUD_OPERATION: `${API_BASE_URL}/Road`,
  ZONE_NAME_ID_ONLY: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_zone_name_id`,
  RETURN_ROAD_COUNT_FROM_ZONE: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_road_count_by_zone`,
  ZONE_MARKER: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_zone_polygon`,
  ROAD_MARKER: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_road_markers_admin_area`,
  ZONE_COMBOBOX: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_district_combobox`,
  ZONE_COMBOBOX_ID: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_zone_id_combobox`,
};

export const OD_LOS_API_URLS = {
  GET_LOS: `${API_CUSTOM_BASE_URL}/nitmc.api.get_data_los`,
  GET_OD: `${API_CUSTOM_BASE_URL}/nitmc.api.get_data_od`,
  GET_SPECIFIC_JUNCTION:
    "https://api.react.net.my/tziDJI761Bh=/stl/get_junction",
  GET_SPECIFIC_JUNCTION_BY_ORG:
    "https://api.react.net.my/tziDJI761Bh=/stl/get_junction_by_organizationid",
  GET_SPECIFIC_JUNCTION_LOS: `${API_CUSTOM_BASE_URL}/nitmc.api.get_data_list_mongo`,
};

export const WEATHER_API_URLS = {
  WEATHER: `${API_CUSTOM_BASE_URL}/nitmc.api.get_data_weather`,
  WEATHER_SPECIFIC: `${API_CUSTOM_BASE_URL}/nitmc.api.get_data_weather_specific`,
};

export const SYSTEM_INFO_URLS = {
  SYSTEM_INFO: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_system_metrics`,
};

export const ACTIVITY_LOG_URLS = {
  LOG: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_activity_log`,
};

export const TDC_API_URLS = {
  TDC_MARKER: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_tdc_markers`,
  TDC_CARD: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_tdc_card_data`,
  TDC_DETAILS: `${API_BASE_URL}/TDC?fields=["name","location","last_updated","longitude","latitude","tag","zone","vendor","mode","interval","lane","device_id","device_name","control_room"]&limit_page_length=none`,
  TDC_CUD_OPERATION: `${API_BASE_URL}/TDC`,
  TDC_MINUTE_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_tdc.minute`,
  TDC_DAILY_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_tdc.daily`,
  TDC_MONTHLY_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_tdc.monthly`,
  TDC_YEARLY_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_tdc.yearly`,
  TDC_COMBOBOX: `${API_CUSTOM_BASE_URL}/nitmc.api_tdc.get_tdc_combobox`,
  TDC_VEHICLE_CLASS: `${API_CUSTOM_BASE_URL}/nitmc.api_tdc.vehicle_classification`,
};

export const ON_DEMAND_API_URLS = {
  CLASSIFICATION_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_tdc.on_demand_vol_speed`,
  PERCENTILE_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_tdc.on_demand_percentile`,
};

export const JUNC_API_URLS = {
  JUNC_MARKER: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_junction_markers`,
  JUNC_CARD: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_junction_card_data`,
  JUNC_DETAILS: `${API_BASE_URL}/Junction?fields=["name","junction_name","location","tag","integration_id","zone","total_detector","vendor"]&limit_page_length=none`,
  JUNC_CUD_OPERATION: `${API_BASE_URL}/Junction`,
  JUNC_MINUTE_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_historical_junc.minute`,
  JUNC_HOURLY_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_historical_junc.hourly`,
  JUNC_DAILY_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_historical_junc.daily`,
  JUNC_COMBOBOX: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_junction_combobox`,
};

export const ROAD_OPERATION_URLS = {
  ROAD_CARD: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_road_card_data`,
  ROAD_MARKER: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_road_markers`,
};

export const EXECUTIVE_DASH_CHARTS_API_URLS = {
  LOS_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_los_poc.start`,
  SOCIAL_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_social.start`,
  HOUR_CONGESTION_LEVEL_CHART: `${API_CUSTOM_BASE_URL}/nitmc.api_hourcongestionlevel.start`,
  VEHICLE_CLASS_DIST_CHARTS: `${API_CUSTOM_BASE_URL}/nitmc.api_classdistribution.start`,
  RUSH_HOUR_CONGESTION_LOST_CHARTS: `${API_CUSTOM_BASE_URL}/nitmc.api_rushhourtimelost.start`,
  CONGESTION_LVL_BY_MONTH_CHARTS: `${API_CUSTOM_BASE_URL}/nitmc.api_congestionlevel.start`,
  ALARMS:`${API_CUSTOM_BASE_URL}/nitmc.api_alarm.start`,
};

export const EXECUTIVE_DASH_CARDS_API_URLS = {
  CARDS: `${API_CUSTOM_BASE_URL}/nitmc.api_hourcongestionlevel.summary`,
};

export const EXECUTIVE_REPORT_API_URLS = {
  LOS_REPORT: `${API_CUSTOM_BASE_URL}/nitmc.api_los_poc.start`,
  SOCIAL_REPORT: `${API_CUSTOM_BASE_URL}/nitmc.api_social.start`,
  HOUR_CONGESTION_LEVEL_REPORT: `${API_CUSTOM_BASE_URL}/nitmc.api_hourcongestionlevel.start`,
  VEHICLE_CLASS_DIST_REPORT: `${API_CUSTOM_BASE_URL}/nitmc.api_classdistribution.start`,
  RUSH_HOUR_CONGESTION_LOST_REPORT: `${API_CUSTOM_BASE_URL}/nitmc.api_rushhourtimelost.start`,
  CONGESTION_LVL_BY_MONTH_REPORT: `${API_CUSTOM_BASE_URL}/nitmc.api_congestionlevel.start`,
  SPECIFIC_ROADS_COMBOBOX: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_roads_by_zone`,
};

export const USER_GROUP_API_URLS = {
  CRUD_USER_GROUP: `${API_BASE_URL}/Custom%20DocPerm`,
  GET_ADD_ROLE_COMBOBOX: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_filtered_roles`,
  GET_DOCTYPE_COMBOBOX: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_nitmc_doctypes`,
  GET_SPECIFIC_ROLE_PERM: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.get_specific_role_doctype_perm`,
  CREATE_SPECIFIC_ROLE_PERM: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.upload_specific_role_doctype_perm`,
  UPDATE_SPECIFIC_ROLE_PERM: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.update_specific_role_doctype_perm`,
  DELETE_SPECIFIC_ROLE_PERM: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.delete_specific_role_doctype_perm`,
  DELETE_SPECIFIC_ROLE: `${API_CUSTOM_BASE_URL}/nitmc.nitmc_api.delete_specific_role`,
};

export const STL_API_URL = {
  DASHBOARD: {
    JUNC_DASHBOARD: `${API_BASE_URL_2}/stl/get_junction`,
    STATES_DASHBOARD: `${API_BASE_URL_2}/stl/get_state`,
    CAMERA_DASHBOARD: `${API_BASE_URL_2}/stl/get_camera`,
    GROUP_LIVE_DASHBOARD: `${API_BASE_URL_2}/stl/get_group_live`,
    TRAFF_CHANGE_LIGHT_DASH: `${API_BASE_URL_2}/stl/get_traffic_change_light`,
    MONGO_CHART_DASH: `${API_BASE_URL_2}/stl/get_mongo_chart`,
    MONGO_CHART_CAR_COUNT_DASH: `${API_BASE_URL_2}/stl/get_mongo_chart_carcount`,
  },
  DEVICE: {
    CAMERA_DEVICE: `${API_BASE_URL_2}/stl/get_camera`,
    DATA_LINE_DEVICE: `${API_BASE_URL_2}/stl/get_data_line_15minute`,
    STATES_DEVICE: `${API_BASE_URL_2}/stl/get_state`,
    VEHICLE_DETECTION_DEVICE: `${API_BASE_URL_2}/stl/get_redis_anpr`,
    DATA_STATISTICAL_DEVICE: `${API_BASE_URL_2}/stl/get_data_statistical`,
  },
  REPORT: {
    ORG_REPORT: `${API_BASE_URL_2}/stl/get_organization`,
    GROUP_REPORT: `${API_BASE_URL_2}/stl/get_group`,
    DATA_RES_REPORT: `${API_BASE_URL_2}/stl/report/get_data_result`,
    BEFORE_AFTER_REPORT: `${API_BASE_URL_2}/stl/report/get_data_result`,
    JOURNEY_TIME_REPORT: `${API_BASE_URL_2}/stl/report/get_mongoresult`,
  },
};
